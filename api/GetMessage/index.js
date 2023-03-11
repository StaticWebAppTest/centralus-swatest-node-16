module.exports = async function (context, req) {
  const date = "2023-03-11T06:11:45.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

