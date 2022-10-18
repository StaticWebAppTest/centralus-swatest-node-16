module.exports = async function (context, req) {
  const date = "2022-10-18T18:24:02.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

