module.exports = async function (context, req) {
  const date = "2022-07-24T14:09:41.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

