module.exports = async function (context, req) {
  const date = "2022-12-12T08:13:27.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

