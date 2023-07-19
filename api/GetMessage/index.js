module.exports = async function (context, req) {
  const date = "2023-07-19T13:13:08.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

