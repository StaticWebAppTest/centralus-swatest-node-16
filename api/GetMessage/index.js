module.exports = async function (context, req) {
  const date = "2022-09-16T01:12:07.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

