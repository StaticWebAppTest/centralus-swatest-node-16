module.exports = async function (context, req) {
  const date = "2022-03-21T11:09:15.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

