module.exports = async function (context, req) {
  const date = "2022-05-21T14:09:33.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

