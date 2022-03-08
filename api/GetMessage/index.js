module.exports = async function (context, req) {
  const date = "2022-03-08T08:12:45.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

