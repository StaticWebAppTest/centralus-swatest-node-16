module.exports = async function (context, req) {
  const date = "2022-07-11T06:14:23.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

