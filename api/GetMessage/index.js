module.exports = async function (context, req) {
  const date = "2023-11-16T16:12:36.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

