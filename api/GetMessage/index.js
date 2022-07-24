module.exports = async function (context, req) {
  const date = "2022-07-24T22:10:08.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

