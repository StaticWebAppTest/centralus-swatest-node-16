module.exports = async function (context, req) {
  const date = "2022-11-28T14:09:43.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

