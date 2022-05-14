module.exports = async function (context, req) {
  const date = "2022-05-14T14:10:22.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

