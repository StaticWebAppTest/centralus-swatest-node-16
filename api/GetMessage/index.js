module.exports = async function (context, req) {
  const date = "2023-09-16T06:10:30.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

