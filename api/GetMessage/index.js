module.exports = async function (context, req) {
  const date = "2023-04-16T06:11:03.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

