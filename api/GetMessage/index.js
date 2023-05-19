module.exports = async function (context, req) {
  const date = "2023-05-19T06:11:40.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

