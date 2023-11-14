module.exports = async function (context, req) {
  const date = "2023-11-14T17:07:10.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

