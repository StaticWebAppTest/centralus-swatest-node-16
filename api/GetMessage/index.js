module.exports = async function (context, req) {
  const date = "2022-11-25T05:09:40.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

