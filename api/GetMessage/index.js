module.exports = async function (context, req) {
  const date = "2022-10-23T23:14:47.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

