module.exports = async function (context, req) {
  const date = "2022-05-12T09:11:17.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

