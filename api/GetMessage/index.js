module.exports = async function (context, req) {
  const date = "2022-09-18T14:10:06.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

