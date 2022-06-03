module.exports = async function (context, req) {
  const date = "2022-06-03T13:26:25.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

