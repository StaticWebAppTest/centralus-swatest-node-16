module.exports = async function (context, req) {
  const date = "2023-02-07T11:08:09.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

