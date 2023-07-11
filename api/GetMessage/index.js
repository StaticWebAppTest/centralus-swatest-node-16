module.exports = async function (context, req) {
  const date = "2023-07-11T14:09:19.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

