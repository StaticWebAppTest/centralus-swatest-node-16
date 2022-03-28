module.exports = async function (context, req) {
  const date = "2022-03-28T13:20:21.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

