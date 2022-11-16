module.exports = async function (context, req) {
  const date = "2022-11-16T18:13:18.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

