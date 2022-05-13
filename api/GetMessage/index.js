module.exports = async function (context, req) {
  const date = "2022-05-13T09:11:24.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

