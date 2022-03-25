module.exports = async function (context, req) {
  const date = "2022-03-25T07:10:24.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

