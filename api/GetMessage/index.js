module.exports = async function (context, req) {
  const date = "2022-09-14T11:10:44.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

