module.exports = async function (context, req) {
  const date = "2022-09-13T11:10:51.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

