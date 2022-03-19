module.exports = async function (context, req) {
  const date = "2022-03-19T15:10:23.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

