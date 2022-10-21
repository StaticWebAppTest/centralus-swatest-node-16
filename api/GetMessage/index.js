module.exports = async function (context, req) {
  const date = "2022-10-21T01:09:23.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

