module.exports = async function (context, req) {
  const date = "2022-08-04T17:18:25.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

