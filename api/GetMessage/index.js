module.exports = async function (context, req) {
  const date = "2022-12-17T03:09:44.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

