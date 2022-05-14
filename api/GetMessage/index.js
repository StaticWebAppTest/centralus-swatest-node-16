module.exports = async function (context, req) {
  const date = "2022-05-14T18:13:25.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

