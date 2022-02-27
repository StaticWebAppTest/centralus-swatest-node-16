module.exports = async function (context, req) {
  const date = "2022-02-27T09:09:25.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

