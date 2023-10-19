module.exports = async function (context, req) {
  const date = "2023-10-19T06:12:14.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

