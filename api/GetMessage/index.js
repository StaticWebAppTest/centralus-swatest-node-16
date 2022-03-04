module.exports = async function (context, req) {
  const date = "2022-03-04T18:11:52.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

