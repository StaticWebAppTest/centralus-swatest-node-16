module.exports = async function (context, req) {
  const date = "2022-07-04T15:20:27.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

