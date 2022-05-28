module.exports = async function (context, req) {
  const date = "2022-05-28T13:22:20.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

