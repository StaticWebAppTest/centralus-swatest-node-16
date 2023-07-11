module.exports = async function (context, req) {
  const date = "2023-07-11T06:13:09.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

