module.exports = async function (context, req) {
  const date = "2022-03-11T15:10:21.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

