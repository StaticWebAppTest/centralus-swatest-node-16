module.exports = async function (context, req) {
  const date = "2022-05-03T23:10:07.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

