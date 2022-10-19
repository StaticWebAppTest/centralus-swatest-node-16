module.exports = async function (context, req) {
  const date = "2022-10-19T17:38:23.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

