module.exports = async function (context, req) {
  const date = "2022-05-28T11:09:52.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

