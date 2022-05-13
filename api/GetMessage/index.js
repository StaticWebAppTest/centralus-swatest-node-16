module.exports = async function (context, req) {
  const date = "2022-05-13T11:10:09.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

