module.exports = async function (context, req) {
  const date = "2022-09-24T05:39:44.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

