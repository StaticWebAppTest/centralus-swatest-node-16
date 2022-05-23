module.exports = async function (context, req) {
  const date = "2022-05-23T13:32:42.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

