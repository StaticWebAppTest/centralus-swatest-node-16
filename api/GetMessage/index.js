module.exports = async function (context, req) {
  const date = "2022-10-22T11:10:47.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

