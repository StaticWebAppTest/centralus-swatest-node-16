module.exports = async function (context, req) {
  const date = "2023-11-11T06:10:56.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

