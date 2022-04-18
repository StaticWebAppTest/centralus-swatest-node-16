module.exports = async function (context, req) {
  const date = "2022-04-18T09:10:50.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

