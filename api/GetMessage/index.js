module.exports = async function (context, req) {
  const date = "2022-07-03T09:10:49.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

