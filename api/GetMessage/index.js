module.exports = async function (context, req) {
  const date = "2022-06-28T06:14:12.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

